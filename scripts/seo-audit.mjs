import fs from 'node:fs';
import path from 'node:path';

const distDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\easy-utility-india\\dist';

function auditHtmlFiles() {
  console.log('--- STARTING TECHNICAL SEO AUDIT ---');

  const htmlFiles = [];
  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        scan(full);
      } else if (e.name === 'index.html') {
        htmlFiles.push(full);
      }
    }
  }
  scan(distDir);

  console.log(`Found ${htmlFiles.length} HTML pages to inspect.\n`);

  const issues = [];

  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf-8');

    // Check 1: Title
    const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';
    if (!title) {
      issues.push(`[${rel}] Missing <title> tag`);
    } else if (title.length > 70) {
      issues.push(`[${rel}] Title may be too long (${title.length} chars): "${title}"`);
    }

    // Check 2: Meta description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const desc = descMatch ? descMatch[1] : '';
    if (!desc) {
      issues.push(`[${rel}] Missing meta description`);
    } else if (desc.length > 170) {
      issues.push(`[${rel}] Description may be too long (${desc.length} chars): "${desc.substring(0, 60)}..."`);
    }

    // Check 3: Canonical
    const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    const canonical = canonMatch ? canonMatch[1] : '';
    if (!canonical) {
      issues.push(`[${rel}] Missing canonical link`);
    }

    // Check 4: H1 count
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    if (h1Matches.length === 0) {
      issues.push(`[${rel}] Missing <h1> tag`);
    } else if (h1Matches.length > 1) {
      issues.push(`[${rel}] Multiple <h1> tags found (${h1Matches.length})`);
    }

    // Check 5: Schema JSON-LD
    const jsonLdMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
    if (jsonLdMatches.length === 0) {
      issues.push(`[${rel}] Missing JSON-LD structured data`);
    } else {
      for (const m of jsonLdMatches) {
        const rawJson = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
        try {
          JSON.parse(rawJson);
        } catch (err) {
          issues.push(`[${rel}] Invalid JSON-LD syntax: ${err.message}`);
        }
      }
    }

    // Check 6: Open Graph tags
    if (!content.includes('property="og:title"')) issues.push(`[${rel}] Missing og:title`);
    if (!content.includes('property="og:description"')) issues.push(`[${rel}] Missing og:description`);
    if (!content.includes('property="og:url"')) issues.push(`[${rel}] Missing og:url`);

    console.log(`Page: /${rel === 'index.html' ? '' : rel.replace('/index.html', '')} | Title: ${title.length} chars | Desc: ${desc.length} chars | H1: ${h1Matches.length} | Schemas: ${jsonLdMatches.length}`);
  }

  console.log('\n--- AUDIT SUMMARY ---');
  if (issues.length === 0) {
    console.log('✓ All pages passed basic technical SEO checks!');
  } else {
    console.log(`Found ${issues.length} potential SEO improvements:`);
    issues.forEach(i => console.log(' - ' + i));
  }
}

auditHtmlFiles();
