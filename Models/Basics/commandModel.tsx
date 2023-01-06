import {Text} from "@chakra-ui/react";

export const navigations = [
    {link: "the-cli", title: "The CLI"},
    {link: "symbols-mean", title: "What are those symbols?"}
];

export const terminalText = <Text>
    ASMVC 3.0-dev <br/>
    <br/>
    Usage: <br/>
    command [options] [arguments]<br/>
    <br/>
    Options:<br/>
    -h, --help Display help for the given command. When no command is given display help for the
    list command <br/>
    -q, --quiet Do not output any message<br/>
    -V, --version Displa this application version<br/>
    --ansi|--no-ansi Force (or disable --no-ansi) ANSI output<br/>
    -n, --no-interaction Do not ask any interactive question<br/>
    -v|vv|vvv, --verbose Increase the verbosity of messages: 1 for normal output, 2 for more
    verbose output and 3 for debug<br/>
    <br/>
    Available commands:<br/>
    completion Dump the shell completion script<br/>
    help Display help for a command<br/>
    list List commands<br/>
    repl Enable the ASMVC REPL.<br/>
    serve Serve the web application<br/>
    setup Setting up your web project&apos;s environment in matter of seconds.<br/>
    version [ver] Show framework version<br/>
    cache<br/>
    &nbsp;cache:config [config:cache] Cache the config file<br/>
    create<br/>
    &nbsp;create:command [make:command] Create a command file for you.<br/>
    &nbsp;create:controller [make:controller] Create a controller file for you.<br/>
    &nbsp;create:middleware [make:middleware] Create a middleware file for you.<br/>
    &nbsp;create:migration [make:migration] Create a migration file for you.<br/>
    &nbsp;create:model [make:model] Create a model file for you.<br/>
    &nbsp;create:seeder [make:seeder] Create a seeder file for you.<br/>
    &nbsp;create:test [make:test] Create a test file for you.<br/>
    export<br/>
    &nbsp;export:core Export cores file<br/>
    install<br/>
    &nbsp;install:bootstrap Install Bootstrap Framework to your web app<br/>
    rollback<br/>
    &nbsp;rollback:migration [migrate:rollback] Rollback your migration<br/>
    run<br/>
    &nbsp;run:migration [migrate] Migrate your database<br/>
    &nbsp;run:seeder [seed:db] Seed your database entry<br/>
    &nbsp;run:test [test] Run your test file<br/>
</Text>;