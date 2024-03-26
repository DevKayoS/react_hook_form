import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userFormSchema, UserFormSchema } from "../schemas/userFormSchema"

export function userForms(){
  const {register, handleSubmit, formState: {errors} }= useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema)
  })

 return {register, handleSubmit, errors}
}