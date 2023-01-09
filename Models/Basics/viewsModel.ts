const navigations = [
    {link: "what-is-view", title: "What is View?"},
    {link: "latte-engine", title: "The Default Engine (Latte)"},
    {link: "built-in", title: "The built in Engine"},
    {link: "form-submission", title: "Form Submission and Protection"}
];

const viewsHelpersFn = {
    include: "views()->include($viewPath)",
    extends: "views()->include($viewPath)",
    sectionOneLiner: "views()->section($identifier, $content)",
    section: "views()->section($identifier)",
    endSection: "views()->endSection()",
    getSection: "views()->getSection($identifier)",
    match: "views()->match($urlPath, $className)"
};

const generalFn = {
    csrf: "csrf($key)",
    getErrorMsg: "getErrorMsg($fieldName)",
};

const latteFn = {
    flash: "flash()",
    match: "match($urlPath, $className)",
    url: "url($path)"
};

export {latteFn, generalFn, viewsHelpersFn, navigations};