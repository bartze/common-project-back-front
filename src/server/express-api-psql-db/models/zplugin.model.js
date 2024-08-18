/* 

This is from v7 version and could be the ts challenge to be done :D 

import { Sequelize, DataTypes, Model } from '@sequelize/core';
import {
	Attribute,
	PrimaryKey,
	AutoIncrement,
	NotNull,
} from '@sequelize/core/decorators-legacy';
import { PostgresDialect } from '@sequelize/pgsql';

export class User extends Model {
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	id;

	@Attribute(DataTypes.STRING)
	@NotNull
	firstName;

	@Attribute(DataTypes.STRING)
	lastName;
}

import { Sequelize } from '@sequelize/core';

export const sequelize = new Sequelize({
	dialect: PostgresDialect,
	// add all your models here
	models: [User],
});
 */
