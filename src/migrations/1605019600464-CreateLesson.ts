import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLesson1605019600464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'lesson',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'integer'
                    },
                    {
                        name: 'created_At',
                        type: 'timeStamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timeStamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('lesson')
    }

}
