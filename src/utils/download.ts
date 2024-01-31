import firebase from '@/plugins/firebase'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

function download() {
    const storage = getStorage(firebase.firebase)
    const starsRef = ref(storage, 'assets/cv.png')

    getDownloadURL(starsRef)
        .then((url) => {
            const xhr = new XMLHttpRequest()
            xhr.responseType = 'blob'
            xhr.onload = () => {
                const blob = xhr.response
                const a = document.createElement('a')
                a.href = window.URL.createObjectURL(blob)
                a.download = 'cv.png'
                a.style.display = 'none'
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(a.href)
                document.body.removeChild(a)
            }
            xhr.open('GET', url)
            xhr.send()
        })
        .catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    break
                case 'storage/unauthorized':
                    break
                case 'storage/canceled':
                    break
                case 'storage/unknown':
                    break
                default:
                    console.error(
                        'Errore sconosciuto durante il download:',
                        error
                    )
            }
        })
}

export default download
