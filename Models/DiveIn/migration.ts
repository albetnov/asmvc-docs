const navigations = [
    {link: "intro", title: "Intro"},
    {link: "generating-migration", title: "Generating a migration file"},
    {link: "understanding-methods", title: "Understanding Methods in Migration File"},
    {link: "running-migration", title: "Running the migration"},
    {link: "sorting", title: "The Sorter.php"}
];

const migrationFile = `<?php

namespace App\\Asmvc\\Database\\Migrations;

use App\\Asmvc\\Core\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;

return new class extends Migration
{
    public function up(): void
    {
        $this->schema->create('', function(Blueprint $table){
        
        });
    }

    public function down(): void
    {
        $this->schema->dropIfExists('');
    }
};`;

const sorterFile = `<?php

namespace App\\Asmvc\\Database;

class Sorter
{
    public function migrations(): ?array
    {
        return null;
    }

    public function seeders(): ?array
    {
        return null;
    }
    
    public function exceptMigration(): ?array
    {
        return null;
    }

    public function exceptSeeder(): ?array
    {
        return null;
    }
}
`;

const migrationFileArray = `
return [
    'flight_1673488199',
    'ticket_1673488218'
];
`

const seederFileArray = `
return [
    'FlightSeeder',
    'TicketSeeder'
];
`;

export {navigations, migrationFile, sorterFile, migrationFileArray, seederFileArray};