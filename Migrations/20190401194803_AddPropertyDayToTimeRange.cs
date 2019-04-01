using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ntttime.Migrations
{
    public partial class AddPropertyDayToTimeRange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Day",
                table: "TimeRange");

            migrationBuilder.AddColumn<DateTime>(
                name: "Day",
                table: "TimeEntries",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Day",
                table: "TimeEntries");

            migrationBuilder.AddColumn<DateTime>(
                name: "Day",
                table: "TimeRange",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
