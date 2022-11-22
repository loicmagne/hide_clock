/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

const { St } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const Main = imports.ui.main;
const DateMenu = Main.panel.statusArea.dateMenu;

const CUSTOM_TEXT = "(⌐■_■)";

let old_actors, new_actor;

function init(meta) {
    log(`initializing ${meta.metadata.name}`);
    new_actor = new St.Label({
        text: CUSTOM_TEXT,
        style_class: 'custom-date-label',
    });
}


function enable() {
    log(`enabling ${Me.metadata.name}`);
    old_actors = DateMenu.first_child.get_children();
    DateMenu.first_child.remove_all_children();
    DateMenu.first_child.add_child(new_actor);
}


function disable() {
    log(`disabling ${Me.metadata.name}`);
    DateMenu.first_child.remove_all_children();
    old_actors.forEach(actor => DateMenu.first_child.add_child(actor));
}