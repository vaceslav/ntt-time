using Microsoft.EntityFrameworkCore.Migrations;

namespace ntttime.Migrations
{
    public partial class RenameCols : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartNew",
                table: "TimeEntries",
                newName: "Start");

            migrationBuilder.RenameColumn(
                name: "EndNew",
                table: "TimeEntries",
                newName: "End");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Start",
                table: "TimeEntries",
                newName: "StartNew");

            migrationBuilder.RenameColumn(
                name: "End",
                table: "TimeEntries",
                newName: "EndNew");
        }
    }
}
