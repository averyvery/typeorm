import {QueryRunner} from "../query-runner/QueryRunner";

/**
 * Migrations should implement this interface and all its methods.
 */
export interface MigrationInterface {

    className: string;

    /**
     * Run the migrations.
     */
    up(queryRunner: QueryRunner): Promise<any>;

    /**
     * Reverse the migrations.
     */
    down(queryRunner: QueryRunner): Promise<any>;

}
