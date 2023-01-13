const navigations = [
    {link: "intro", title: "Seeder Introduction"},
    {link: "generating-seeder", title: "Generating Seeder"},
    {link: "writing-seeder", title: "Writing Seeder"}
];

const seederFile = `<?php

namespace App\\Asmvc\\Database\\Seeders;

use App\\Asmvc\\Core\\Seeders\\Seeders;
use Faker\\Generator;

class SeederName extends Seeders
{
    public function run(): void
    {
        /**
         * 
         * Fluent Seeder
         * 
         * Please visit https://albetnov.github.io/asmvc-docs/#/seeder for more
         * documentation
         * 
         **/
            
        \\$this->fake(1, fn(Generator \\$fake) => [
            'key' => \\$fake->name()
        ])
        ->done(); // mark as finish 
    }
}`;

export {navigations, seederFile};