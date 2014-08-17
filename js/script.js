/*	QuickSet - Quickly see and edit League of Legends Item Sets
    Copyright (C) 2014  Kewin Dousse (Protectator)

    This file is part of QuickSet.

    QuickSet is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or any later version.

    QuickSet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Contact : kewin.d@websud.ch
    Project's repository : https://github.com/Protectator/QuickSet
*/

/*
	Set 
	Represents a complete set of items.
 */
function Set (text) {
	this.data = JSON.parse(text);
}

Set.prototype.getBlocks = function () {
	return this.data["blocks"];
}

Set.prototype.getChampions = function () {
	return this.data["associatedChampions"];
}

Set.prototype.getMaps = function () {
	return this.data["associatedMaps"];
}

Set.prototype.getTitle = function () {
	return this.data["title"];
}

Set.prototype.getText = function () {
	return JSON.stringify(this.data);
}

function HTMLitem(itemNumber) {
	var html = "";
	return html;
}

function HTMLblock(title, itemsArray) {
	var html = "";
	return html;
}

function HTMLset(title, blocksArray) {
	var html = "";
	return html;
}