using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ntttime.Migrations
{
    public partial class DeleteProcessItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DocumentInfo");

            migrationBuilder.DropTable(
                name: "ProcessDocuments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProcessDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DocumentType = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProcessDocuments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DocumentInfo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FileLenght = table.Column<int>(nullable: false),
                    FileName = table.Column<string>(nullable: true),
                    ProcessDocumentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DocumentInfo_ProcessDocuments_ProcessDocumentId",
                        column: x => x.ProcessDocumentId,
                        principalTable: "ProcessDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DocumentInfo_ProcessDocumentId",
                table: "DocumentInfo",
                column: "ProcessDocumentId");
        }
    }
}
