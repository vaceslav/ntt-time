using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ntttime.Migrations
{
    public partial class ChangeTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "End",
                table: "TimeEntries");

            migrationBuilder.DropColumn(
                name: "Start",
                table: "TimeEntries");

            migrationBuilder.AddColumn<int>(
                name: "EndNew",
                table: "TimeEntries",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StartNew",
                table: "TimeEntries",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndNew",
                table: "TimeEntries");

            migrationBuilder.DropColumn(
                name: "StartNew",
                table: "TimeEntries");

            migrationBuilder.AddColumn<DateTime>(
                name: "End",
                table: "TimeEntries",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Start",
                table: "TimeEntries",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
