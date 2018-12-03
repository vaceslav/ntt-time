using Microsoft.EntityFrameworkCore.Migrations;

namespace ntttime.Migrations
{
    public partial class ModifyEndProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "End",
                table: "TimeRange",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "End",
                table: "TimeRange",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
