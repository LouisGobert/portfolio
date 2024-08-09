import azure from '/public/svg/skills/azure.svg';
import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import jsimage from '/public/svg/skills/jsimage.svg';
import markdown from '/public/svg/skills/markdown.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import selenium from '/public/svg/skills/selenium.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'javascript':
      return jsimage;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'mongodb':
      return mongoDB;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'python':
      return python;
    case 'swift':
      return swift;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'tensorflow':
      return tensorflow;
    case 'azure':
      return azure;
    case 'markdown':
      return markdown;
    default:
      break;
  }
}
