using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_Fetch.Migrations
{
    /// <inheritdoc />
    public partial class new_m1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "age",
                table: "Employees",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "age",
                table: "Employees");
        }
    }
}
