import { defineStore } from 'pinia'

export const useDataStore = defineStore('DataStore', {
  state: () => ({
    openingstijden: [
      { dag: 'Maandag', tijd: '10:30 - 22:00' },
      { dag: 'Dinsdag', tijd: '10:30 - 22:00' },
      { dag: 'Woensdag', tijd: '10:30 - 22:00' },
      { dag: 'Donderdag', tijd: '10:30 - 22:00' },
      { dag: 'Vrijdag', tijd: '10:30 - 02:00' },
      { dag: 'Zaterdag', tijd: '10:30 - 02:00' },
      { dag: 'Zondag', tijd: '10:30 - 00:00' }
    ],
    openingstijdenGewijzigd: { datum: 'Donderdag 31 augustus 2023' },
    openingstijdenNotitie: { notitie: '*Met mooi weer regelmatig langer open.' },
    socials: [
      {
        href: 'https://www.facebook.com/debasisbreda/',
        label: 'facebook'
      },
      {
        href: 'https://www.instagram.com/debasisbreda/',
        label: 'instagram'
      },
      {
        href: 'https://www.twitch.tv/basisbreda',
        label: 'twitch'
      }
    ],
    contact: {
      bedrijfsnaam: 'De Basis',
      adres: 'Veemarktstraat 4',
      postcode: '4811ZE',
      plaats: 'Breda',
      tel: '+31 (0)76 515 3272',
      email: 'breda@inspirecoffee.com'
    }
  }),
  getters: {},
  actions: {}
})
