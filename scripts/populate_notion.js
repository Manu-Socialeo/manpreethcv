const { PROJECTS, NOTION_TOKEN, NOTION_VERSION } = require('./projects_data');

const PARENT_PAGE_ID = '3d7a90f3-ed22-8045-b233-f86d5ea6b2f4';

const ICONS = {
  "yoga-school": "🧘‍♂️",
  "vo2-max": "⚡",
  "socialeo-ai": "🤖",
  "naati-nest": "🍲",
  "meritus": "🏥",
  "dog-protection-trust": "🐾",
  "shivaretreats": "🏖️",
  "trekandstay": "⛰️"
};

function textBlock(content) {
  return [{ type: 'text', text: { content: content || '' } }];
}

function boldText(bold, rest = '') {
  return [
    { type: 'text', text: { content: bold }, annotations: { bold: true } },
    { type: 'text', text: { content: rest } }
  ];
}

function linkText(label, url) {
  return [
    { type: 'text', text: { content: label }, annotations: { bold: true } },
    { type: 'text', text: { content: ': ' } },
    { type: 'text', text: { content: url, link: { url: url } } }
  ];
}

function paragraph(content) {
  return {
    object: 'block',
    type: 'paragraph',
    paragraph: { rich_text: textBlock(content) }
  };
}

function heading1(content) {
  return {
    object: 'block',
    type: 'heading_1',
    heading_1: { rich_text: textBlock(content) }
  };
}

function heading2(content) {
  return {
    object: 'block',
    type: 'heading_2',
    heading_2: { rich_text: textBlock(content) }
  };
}

function heading3(content) {
  return {
    object: 'block',
    type: 'heading_3',
    heading_3: { rich_text: textBlock(content) }
  };
}

function callout(content, emoji = '💡') {
  return {
    object: 'block',
    type: 'callout',
    callout: {
      icon: { type: 'emoji', emoji },
      rich_text: textBlock(content)
    }
  };
}

function bullet(content) {
  return {
    object: 'block',
    type: 'bulleted_list_item',
    bulleted_list_item: { rich_text: textBlock(content) }
  };
}

function bulletWithBold(bold, rest) {
  return {
    object: 'block',
    type: 'bulleted_list_item',
    bulleted_list_item: { rich_text: boldText(bold, rest) }
  };
}

function bulletLink(label, url) {
  if (!url) {
    return bulletWithBold(label + ': ', 'Private / Client Confidential');
  }
  return {
    object: 'block',
    type: 'bulleted_list_item',
    bulleted_list_item: { rich_text: linkText(label, url) }
  };
}

function divider() {
  return { object: 'block', type: 'divider', divider: {} };
}

function buildProjectBlocks(p) {
  const blocks = [
    callout(`${p.tagline}\n\n• Role: ${p.role}\n• Timeline: ${p.timeline}\n• Category: ${p.category}`, '📌'),
    divider(),

    heading2('🔗 Live Deployments & Repository Links'),
    bulletWithBold('Status: ', p.status),
    bulletLink('Live Production Application', p.liveUrl),
    bulletLink('GitHub Source Code', p.githubUrl),
    bulletWithBold('Core Tech Stack: ', p.techStack.join(' • ')),
    divider(),

    heading2('📖 Executive Summary & Impact'),
    paragraph(p.overview),
    divider(),

    heading2('📄 1. Product Requirements Document (PRD)'),
    heading3('1.1 Problem Statement & Market Friction'),
    paragraph(p.prd.problem),
    heading3('1.2 Solution & Value Proposition'),
    paragraph(p.prd.solution),
    heading3('1.3 Target User Personas'),
    ...p.prd.personas.map(persona => {
      const parts = persona.split(':');
      return parts.length > 1 
        ? bulletWithBold(parts[0] + ':', parts.slice(1).join(':')) 
        : bullet(persona);
    }),
    heading3('1.4 Core Functional Specifications'),
    ...p.prd.coreFeatures.map(feat => {
      const parts = feat.split(':');
      return parts.length > 1
        ? bulletWithBold(parts[0] + ':', parts.slice(1).join(':'))
        : bullet(feat);
    }),
    divider(),

    heading2('🛠️ 2. Technical Requirements Document (TRD)'),
    heading3('2.1 System Architecture'),
    paragraph(p.trd.architecture),
    heading3('2.2 Database Schema & State Management'),
    paragraph(p.trd.databaseSchema),
    heading3('2.3 API Layer & Service Integration'),
    paragraph(p.trd.apiLayer),
    heading3('2.4 Security, Reliability & Performance Standards'),
    paragraph(p.trd.securityPerformance),
    divider(),

    heading2('🎨 3. UI/UX Design System & User Experience'),
    heading3('3.1 Design System & Visual Philosophy'),
    paragraph(p.uxui.designSystem),
    heading3('3.2 Color Palette & Typography Hierarchy'),
    paragraph(p.uxui.colorPalette),
    heading3('3.3 Interaction Model & Micro-Animations'),
    paragraph(p.uxui.interactions),
    divider(),

    callout(`Engineered by Manpreeth N — Operations & AI-Assisted Full-Stack Developer\n📧 Contact: manpreeth007@gmail.com | 🌐 Portfolio: https://manpreethcv.vercel.app`, '✨')
  ];

  return blocks;
}

async function addParentIntroBlocks() {
  console.log('Adding overview blocks to parent page...');
  const introBlocks = [
    callout(
      "Welcome to the official Engineering & Product Architecture Portfolio of Manpreeth N.\n" +
      "This hub contains in-depth documentation—including complete PRDs, TRDs, UI/UX breakdowns, and system specifications—for 8 production-grade applications.",
      "🚀"
    ),
    heading2("📁 Project Architecture & Deep Dives"),
    paragraph("Below are the 8 dedicated project workspaces. Click on any project to review its full specifications, architectural diagrams, live URLs, and technical accomplishments:"),
    divider()
  ];

  await fetch(`https://api.notion.com/v1/blocks/${PARENT_PAGE_ID}/children`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ children: introBlocks })
  });
}

async function createProjectPage(p) {
  console.log(`Creating page for: [${p.title}]...`);
  const blocks = buildProjectBlocks(p);
  const iconEmoji = ICONS[p.id] || "💻";

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      parent: { page_id: PARENT_PAGE_ID },
      icon: { type: 'emoji', emoji: iconEmoji },
      properties: {
        title: {
          title: [{ type: 'text', text: { content: p.title } }]
        }
      },
      children: blocks.slice(0, 95)
    })
  });

  const data = await res.json();
  if (res.ok) {
    console.log(`✅ Success: ${p.title} -> ${data.url}`);
    return data;
  } else {
    console.error(`❌ Failed: ${p.title}`, data);
    return null;
  }
}

async function run() {
  console.log('Starting Notion Portfolio Population...');
  await addParentIntroBlocks();

  const created = [];
  for (const p of PROJECTS) {
    const res = await createProjectPage(p);
    if (res) created.push(res);
    await new Promise(r => setTimeout(r, 600)); // Rate limit buffer
  }

  console.log(`\n🎉 COMPLETED: ${created.length}/${PROJECTS.length} project pages created!`);
}

run();
