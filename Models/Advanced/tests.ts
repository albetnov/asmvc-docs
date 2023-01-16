const navigations = [
    {link: "intro", title: "PHPUnit Introduction"},
    {link: "generating-running", title: "Generating and Running Tests"}
];

const dummyTestFile = `<?php

namespace App\\Asmvc\\Tests;

use PHPUnit\\Framework\\TestCase;

class SomeTest extends TestCase
{
    //Your logic
}
`;

export {navigations, dummyTestFile};