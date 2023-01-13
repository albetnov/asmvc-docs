const navigations = [
    {link: "meet", title: "Meeting Up With Container"},
    {link: "using-container", title: "Using the Container Interface"},
    {link: "usage-example", title: "Usage Example"}
];

const usageExample = `$this->checkForCors($method);
$this->checkForMiddleware($middleware);

return Container::inject([$handler[0], $handler[1]], $args);
`;

export {navigations, usageExample};