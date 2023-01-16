const navigations = [
    {link: "intro", title: "Introduction to New Console"},
    {link: "documentation", title: "Documentation of CLI"},
    {link: "personal-command", title: "Generating your own CLI"},
    {link: "understanding-them", title: "Understanding Them"},
    {link: "fluent-param-builder", title: "The FluentParamBuilder Apis"},
    {link: "fluent-optional-param-builder", title: "The FluentOptionalParamBuilder Apis"},
    {link: "command-apis", title: "The Extended Command Interface"}
];

const cliBoilerplate = `
<?php

namespace App\\Asmvc\\Commands;

use App\\Asmvc\\Core\\Console\\Command;
use App\\Asmvc\\Core\\Console\\FluentCommandBuilder;
use App\\Asmvc\\Core\\Console\\FluentOptionalParamBuilder;
use App\\Asmvc\\Core\\Console\\FluentParamBuilder;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

class CommandName extends Command
{
    protected function setup(FluentCommandBuilder $builder): FluentCommandBuilder
    {
        return $builder->setName('command:name')
            ->setDesc("Command Description")
            ->setAliases("command:alias")
            ->addParam(fn (FluentParamBuilder $pb) => $pb->setName('argName'))
            ->addOptionalParam(fn(FluentOptionalParamBuilder $opb) => \\$opb->setName('optional'));
    }

    public function handler(InputInterface $inputInterface, OutputInterface $outputInterface): int
    {
        return Command::SUCCESS;
    }
}`;

const consoleBuilderApis = {
    extending: "App\\Asmvc\\Core\\Console\\Commands",
    setup: "protected function setup(FluentCommandBuilder $builder): FluentCommandBuilder",
    fluentBuilder: "App\\Asmvc\\Core\\Console\\FluentCommandBuilder"
}

export {navigations, cliBoilerplate, consoleBuilderApis};