<script setup>
import { useDataStore } from '../stores/DataStore'
import parsePhoneNumber from 'libphonenumber-js'
import FooterHeading from './FooterHeading.vue'

const { contact } = useDataStore()
const phoneNumber = parsePhoneNumber(contact.tel)
</script>

<template>
  <FooterHeading>
    <template #heading>Contact</template>
    <p>
      <span class=" font-medium">{{ contact.bedrijfsnaam }}</span
      ><br />
      {{ contact.adres }}<br />
      {{ contact.postcode }} {{ contact.plaats }}
    </p>
    <nav>
      <ul>
        <li>
          <a class="transition-colors duration-200 font-normal text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
             :href="phoneNumber.getURI()">{{ phoneNumber.formatInternational() }}</a>
        </li>
        <li>
          <a class="transition-colors duration-200 font-normal text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
             :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </li>
      </ul>
    </nav>
  </FooterHeading>
</template>
