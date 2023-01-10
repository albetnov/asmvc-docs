const navigations = [
  { link: "definition", title: "What is Request?" },
  { link: "input-method", title: "getInput Method" },
  { link: "query-method", title: "getQuery Method" },
  { link: "current-url", title: "getCurrentUrl Method" },
  { link: "wants-json", title: "wantsJson Method" },
  { link: "psr-7", title: "PSR-7 Methods" },
];

const fullGetInput = `$request->getInput(string $identifier): string|bool|array`;
const fullGetQuery = `$request->getQuery(string $identifier): string|bool`;
const currentUrl = {
  instance: "$request->getCurrentUrl()",
  helpers: "getCurrentUrl()",
};
const wantsJson = `$request->WantsJson()`;
const psr7 = `$request->getAll()`;

export { navigations, fullGetInput, fullGetQuery, currentUrl, wantsJson, psr7 };
