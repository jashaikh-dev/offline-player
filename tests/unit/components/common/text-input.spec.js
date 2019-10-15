import { shallowMount } from '@vue/test-utils'
import TextInput from '@/components/common/TextInput'

describe('TextInput.spec.js', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(TextInput)
    })

    it('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})