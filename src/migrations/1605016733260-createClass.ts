import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClass1605016733260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'class',
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
                        name: 'duration',
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
                    }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('class');
    }
}
