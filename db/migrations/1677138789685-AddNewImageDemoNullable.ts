import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewImageDemoNullable1677138789685 implements MigrationInterface {
    name = 'AddNewImageDemoNullable1677138789685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`demo\` ADD \`image_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`demo\` CHANGE \`content\` \`content\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`demo\` CHANGE \`title\` \`title\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`demo\` CHANGE \`title\` \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`demo\` CHANGE \`content\` \`content\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`demo\` DROP COLUMN \`image_url\``);
    }

}
