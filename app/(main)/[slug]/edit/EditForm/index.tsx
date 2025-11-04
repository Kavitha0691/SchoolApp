// 'use client'

// import { EditPost } from "@/actions/edit-post"
// import { postSchema } from "@/actions/schema"
// import { Tables } from "@/utils/supabase/database.types"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useMutation } from "@tanstack/react-query"
// import { useForm } from "react-hook-form"
// import z from "zod"

// const EditForm = ({ postId, initialValues }: { postId: number, initialValues: Pick<Tables<'posts'>, "title" | "content" | "image"> }) => {

//     const schemaWithImage = postSchema.omit({ image: true })
//         .extend({
//             image: z.unknown()
//                 .transform(value => { return value as (FileList) }).optional()
//         })

//     const { register, handleSubmit } = useForm({
//         resolver: zodResolver(schemaWithImage),
//         defaultValues: {
//             title: initialValues.title,
//             content: initialValues.content || undefined,
//             image: initialValues.image
//         }
//     })

//     const { mutate, error } = useMutation({
//         mutationFn: EditPost
//     })
//     return (
//         <form onSubmit={handleSubmit(values => {

//             let imageForm = undefined;
           

//             if (values.image?.length && typeof values.image !== 'string') {
//                 imageForm =  new FormData();
//                 imageForm.append('image', values.image[0])
//             }
//             mutate({postId, userdata: { title: values.title, content: values.content, image: imageForm } })
//         }
//         )} className="flex flex-col mb-4">
//             <fieldset>
//                 <label htmlFor="title">Post Title</label>
//                 <input className="ml-2 mb-4 px-2" {...register('title')} id="title" placeholder="what's your post clled..." />
//             </fieldset>

//             <fieldset>
//                 <label htmlFor="content">What are you going to talk about?</label>
//                 <input className="ml-2 mb-4 px-2 border-1 rounded-xl w-full" {...register('content')} id="content" placeholder="what's your" />
//             </fieldset>

//             <fieldset>
//                 {initialValues.image && <img className="w-xl h-auto" src={initialValues.image} alt="post-images" />}
//                 <label htmlFor="image" >upload a new image for your post</label>
//                 <input type="file"  {...register("image")} id="image"></input>
//             </fieldset>

//             <fieldset>
//                 <button className="button-teritary">Update post!</button>
//             </fieldset>
//             {error && <p>{error.message}</p>}
//         </form>
//     )
// }

// export default EditForm



'use client'

import { EditPost } from "@/actions/edit-post"
import { postSchema } from "@/actions/schema"
import { Tables } from "@/utils/supabase/database.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const EditForm = ({ postId, initialValues }: { postId: number, initialValues: Pick<Tables<'posts'>, "title" | "content" | "image"> }) => {

    const schemaWithImage = postSchema.omit({ image: true })
        .extend({
            image: z.unknown()
                .transform(value => value as FileList)
                .optional()
        })

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(schemaWithImage),
        defaultValues: {
            title: initialValues.title,
            content: initialValues.content || undefined,
            image: initialValues.image
        }
    })

    const { mutate, error } = useMutation({
        mutationFn: EditPost
    })

    return (
        <form
            onSubmit={handleSubmit(values => {
                let imageForm = undefined;
                if (values.image?.length && typeof values.image !== 'string') {
                    imageForm = new FormData();
                    imageForm.append('image', values.image[0])
                }
                mutate({ postId, userdata: { title: values.title, content: values.content, image: imageForm } })
            })}
            className="flex flex-col gap-6 w-full max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-2xl border border-gray-200"
        >
            <fieldset className="flex flex-col gap-2">
                <label htmlFor="title" className="font-medium text-gray-700">Post Title</label>
                <input
                    {...register('title')}
                    id="title"
                    placeholder="What's your post called..."
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="content" className="font-medium text-gray-700">What are you going to talk about?</label>
                <input
                    {...register('content')}
                    id="content"
                    placeholder="What's your post about..."
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                {initialValues.image && (
                    <img
                        className="w-full max-h-80 object-cover rounded-lg mb-2"
                        src={initialValues.image}
                        alt="post-image"
                    />
                )}
                <label htmlFor="image" className="font-medium text-gray-700">Upload a new image for your post</label>
                <input
                    type="file"
                    {...register("image")}
                    id="image"
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
                />
            </fieldset>

            <fieldset>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                    Update Post!
                </button>
            </fieldset>

            {error && <p className="text-red-600 text-sm mt-2">{error.message}</p>}
        </form>
    )
}

export default EditForm
