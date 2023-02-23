import { MigrationInterface, QueryRunner } from "typeorm";

export class NewTest1677123720460 implements MigrationInterface {
    name = 'NewTest1677123720460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`demo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`demo\``);
    }

}
