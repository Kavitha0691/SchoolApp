import { v4 as uuid } from 'uuid'
import { createClient } from './server-client';

export const uploadImage = async (image: File) => {
  const supabase = createClient();

  const imageName: string[] = image.name.split(".")
  const path: string = `${imageName[0]}-${uuid()}.${imageName[1]}`

  const { data, error } = await (await supabase).storage.from('images').upload(path, image)

  if (error) {
    console.error("Upload error:", error)
    throw error
  }
  const { data: { publicUrl } } = (await supabase).storage.from('images').getPublicUrl(path)

  return publicUrl;

}