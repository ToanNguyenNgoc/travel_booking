import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewImageDemo1677137136834 implements MigrationInterface {
    name = 'AddNewImageDemo1677137136834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`demo\` ADD \`image_url\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`demo\` DROP COLUMN \`image_url\``);
    }

}
