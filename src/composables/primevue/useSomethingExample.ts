import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const useSomethingExample = () => {
  const something = ref('')
  const toast = useToast()
  const handleSomethingChange = (value: string) => {
    something.value = value
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Something changed',
    })
  }

  return {
    something,
    handleSomethingChange,
  }
}

export { useSomethingExample }