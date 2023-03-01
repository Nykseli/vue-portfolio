/**
 * Generate markdown files for all langues that can be turned into pdf
 */

import * as fs from 'fs'
import * as path from 'path'

import fi from "../src/locale/fi";
import en from "../src/locale/en";
import {
  validCodes,
  Locale,
  Languages,
  technologies
} from "../src/locale/locale";

interface LocaleConents {
  home: string;
  talks: string;
  skills: string;
  contact: string;
  hobbies: string;
  projects: string;
  experience: string;
}

interface LanguageSite {
  /** en, fi etc */
  language: Languages,
  /** site txt content */
  content: string
}

const languages = {
  "en": en,
  "fi": fi
}

const MAX_LINE_WIDTH: number = 80
const LIST_PADDING: number = 4
const BR = '<div class="page-break"></div>'

const limitLineWidth = (line: string, list: boolean = false): string => {
  const lines: string[] = [];

  let cLength = 0;
  let cWords: string[] = [];

  if (list) {
    cLength = LIST_PADDING;
    // Take into account joined space and the '-' character
    //  const space = ' '.repeat(LIST_PADDING - 2)
    //  cWords = [`${space}-`];
    cWords = ['* '];
  }

  const setCs = () => {
    if (list) {
      cLength = LIST_PADDING;
      // Words are joined with space so take that into account here
      const space = ' '.repeat(LIST_PADDING - 1)
      cWords = [`${space}`];
    } else {
      cLength = 0;
      cWords = [];
    }
  }

  for (const word of line.split(' ')) {
    // If the word is over the line limit, lets just add it at is
    if (word.length > MAX_LINE_WIDTH) {
      if (cWords.length > 0) {
        lines.push(cWords.join(' '));
        setCs();
      }
      lines.push(word);
      continue
    }

    // Plus 1 for the space character
    cLength += word.length + 1;
    if (list) {
      cLength += LIST_PADDING;
    }

    if (cLength <= MAX_LINE_WIDTH + 1) {
      cWords.push(word)
    } else {
      lines.push(cWords.join(' '));
      setCs()
      cWords.push(word);
      cLength += word.length + 1;
    }
  }

  // Add the remaining words
  if (cLength > 0) {
    lines.push(cWords.join(' '));
  }

  return lines.join('\n');
}

const localLink = (link: string): string => {
  if (link.startsWith('/')) {
    return `https://miikaalikirri.fi${link}`;
  }

  return link;
}

const genHomeContent = (locale: Locale): string => {
  const local = locale.home
  // TODO: create a function to turn locale into text
  const typerKeys = Object.keys(local).filter(key => key.startsWith('typerInfo')).sort();
  const typer = typerKeys.map(key => local[key]).join('<br />\n');
  let descKeys = Object.keys(local).filter(key => key.startsWith('description')).sort();
  /* put descriptionGreeting first */
  descKeys = [descKeys.pop() as string, ...descKeys];
  const description = descKeys.map(key => limitLineWidth(local[key] as string)).join('\n');
  return `# MIIKA ALIKIRRI\n\n${typer}\n\n${description}`;
}

const genTalksContent = (locale: Locale): string => {
  const local = locale.talks
  const introduction = limitLineWidth(local.introduction);
  const talkKeys = Object.keys(local).filter(key => key.startsWith('talk')).sort();
  const talks = talkKeys.map(key => local[key] as Locale['talks']['talk1'])
  const talkTxt = talks.map(it => {
    const info = `#### ${it.title}\n\n${limitLineWidth(it.description)}`
    const link = `${it.link_description}:\n${localLink(it.link)}`;
    return `\n${info}\n\n${link}\n`
  }).join('\n\n');
  return `## ${locale.navigation.talks}\n\n${introduction}\n\n${talkTxt}`;
}

const genSkillsContent = (locale: Locale): string => {
  const local = locale.skills
  const descKeys = Object.keys(local).filter(key => key.startsWith('description')).sort();
  const desc = limitLineWidth(descKeys.map(key => local[key]).join('\n'));
  const skills = limitLineWidth(technologies.map(t => t.name).join(', '));
  return `## ${locale.navigation.skills}\n\n${desc}\n\n${skills}`;
}

const genContactContent = (locale: Locale): string => {
  const gh = "Github: https://github.com/Nykseli";
  const email = "Email: hi@miikaalikirri.fi";
  return `## ${locale.navigation.contact}\n\n${gh}\n${email}`;
}

const genHobbiesContent = (locale: Locale): string => {
  const local = locale.hobbies
  const descKeys = Object.keys(local).filter(key => key.startsWith('description')).sort();
  const desc = descKeys.map(key => limitLineWidth(local[key] as string)).join('\n');
  return `## ${locale.navigation.hobbies}\n\n${desc}`;
}

const genProjectContent = (locale: Locale): string => {
  const local = locale.projects
  const itemKeys = Object.keys(local).filter(key => key.startsWith('item')).sort();
  const items = itemKeys.map(key => local[key] as Locale['projects']['item1'])
  const tech = items.map((it, idx) => {
    const top = `#### ${it.title}\n${limitLineWidth(it.description)}\n\n`
    const linkKeys = Object.keys(it).filter(key => key.startsWith('link') && it[key]).sort();
    const links = limitLineWidth(linkKeys.map(key => it[key]).join('<br />\n'));

    return `${top}${it.technology}\n<br />${links}\n`
  }).join('\n\n');
  return `## ${locale.navigation.projects}\n\n${tech}`;
}

const genExperienceContent = (locale: Locale): string => {
  const local = locale.experience
  const itemKeys = Object.keys(local).filter(key => key.startsWith('item')).sort();
  const items = itemKeys.map(key => local[key] as Locale['experience']['item1'])
  const exp = items.map((it, idx) => {
    const top = `${it.company ? '\n### ' + it.company + '\n' : '\n### '}${it.title} (${it.duration})\n`
    const descKeys = Object.keys(it).filter(key => key.startsWith('desc')).sort();
    // desciptions might be empty so filter those out
    const descFilt = descKeys.filter(key => it[key])
    const description = descFilt.map(key => limitLineWidth(it[key] as string, true)).join('\n');

    return `${top}\n${description}\n`
  }).join('\n\n');
  return `## ${locale.navigation.experience}\n\n${exp}`;
}

const genLocalConents = (locale: Locale): LocaleConents => {
  return {
    home: genHomeContent(locale),
    talks: genTalksContent(locale),
    skills: genSkillsContent(locale),
    contact: genContactContent(locale),
    hobbies: genHobbiesContent(locale),
    projects: genProjectContent(locale),
    experience: genExperienceContent(locale),
  };
}

const genLanguageSite = (language: Languages): LanguageSite => {
  const c: LocaleConents = genLocalConents(languages[language]);

  let content = `${c.home}\n\n${c.experience}\n\n${BR}\n\n${c.projects}\n\n`
  content = `${content}${c.skills}\n\n${BR}\n\n${c.talks}\n\n${c.hobbies}\n\n${c.contact}\n\n`

  return {
    language,
    content
  };
}

const ensureDirectoryExistence = (filePath: string): void => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return;
  }

  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

const main = (): void => {
  const base = "pdf/"
  const contents = validCodes.map(lang => genLanguageSite(lang));
  // write en.md fi.md etc indexes
  for (const cont of contents) {
    const path = `${base}${cont.language}.md`
    ensureDirectoryExistence(path);
    fs.writeFileSync(path, cont.content, "utf8")
  }
}

main();
