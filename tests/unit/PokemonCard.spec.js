import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import PokemonCard from '@/components/home/PokemonCard.vue'
import TypeTag from '@/components/TypeTag'
import { unitTestPokemonData } from '@/utils'
describe('PokemonCard.vue', () => {
  const wrapper = shallowMount(PokemonCard, {
    propsData: unitTestPokemonData()
  })
  it('check component main div', () => {
    expect(wrapper.find('div'))
  })
  it('check type tag', () => {
    expect(wrapper.findComponent(TypeTag))
  })
  it('check pokemon card image', () => {
    expect(wrapper.find('img'))
  })
  it('check pokemon id and name', () => {
    expect(wrapper.props().id)
    expect(wrapper.props().name)
  })
})
