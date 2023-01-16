const navigations = [
    {link: "monolog", title: "Introducing Monolog"},
    {link: "configuring-monolog", title: "Configuring Monolog"},
    {link: "logger-interface", title: "Logger Interface"}
];

const logCfg = `<?php

return [
    'record_log' => env("RECORD_LOG", true),
    'minimum_level' => env("LOG_MINIMUM_LEVEL", 100)
];
`;

export {navigations, logCfg};