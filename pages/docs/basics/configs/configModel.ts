const navigations = [
    {link: "definition", title: "What is Configuration?"},
    {link: "config-helper", title: "The Config Helper"},
    {link: "shortcut", title: "Provider Config Shortcut"},
    {link: "own-config", title: "Defining your own config"}
];

const sessionConfig = `// session.php

<?php

return [
    'type' => env('SESSION_TYPE', 'php'),
    'ip-validation' => env('SESSION_IP_VALIDATION', false),
    'session-basic-validation' => env('SESSION_VALIDATION', true),
    'secure' => env('SESSION_SECURE', false)
];
`;

export {navigations, sessionConfig};