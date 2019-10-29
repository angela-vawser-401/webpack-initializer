#!/usr/bin/env node

const arg = process.argv;
const path = arg[arg.length - 1];
const fs = require('fs');

if(path !== '.') fs.mkdirSync(path);
fs.mkdirSync(`${path}/src`);

const createPackageJson = require('./writers/package-json-writer');
const createEslint = require('./writers/eslint-writer');
const createGitignore = require('./writers/gitignore-writer');
const createTravis = require('./writers/travis-writer');
const createBabel = require('./writers/babel-writer');
const createWebpack = require('./writers/webpack-writer');
const createIndex = require('./writers/src-index-writer');
const devDependencyInstaller = require('./dependencies/dev-dependencies-installer');
const dependencyInstaller = require('./dependencies/dependencies-installer');

createPackageJson(path);
createEslint(path);
createGitignore(path);
createTravis(path);
createBabel(path);
createWebpack(path);
createIndex(path);
devDependencyInstaller(path);
dependencyInstaller(path);