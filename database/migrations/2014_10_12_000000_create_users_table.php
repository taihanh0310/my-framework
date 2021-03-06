<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->uuid('uid')->nullable();
            $table->string('password')->nullable();
            $table->string('email')->nullable();
            $table->rememberToken()->nullable();
            $table->string('login_token')->nullable();
            $table->enum('status', ['active', 'pending', 'unactive'])->default('unactive');
            $table->enum('role', ['admin', 'doctor', 'client'])->default('client');
            $table->dateTimeTz('last_login_at')->nullable();
            $table->timestampsTz();

            $table->primary('uid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
