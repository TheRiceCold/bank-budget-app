import MenuHTML from '../html/MenuHTML.js'

class SettingsMenu extends MenuHTML {
    constructor() {
        const id = 'settingsMenu'
        const title = 'Account Settings'
        super({ id: id, title: title })
    }

    manager() {

    }
}

export default SettingsMenu
