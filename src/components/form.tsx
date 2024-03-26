import { userForms } from "../hooks/userForms"
import { UserFormSchema } from "../schemas/userFormSchema"


export function Form(){
  const {register, handleSubmit, errors} = userForms()

  const onSubmit = (data: UserFormSchema)=>{
    console.log(data)
  }
  return(
    <form 
    className="w-96 bg-slate-50 p-4 rounded-lg border border-slate-300"
    onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">Nome:</label>
        <input 
        className="h-10 pl-3 rounded-md border border-slate-300"
        type="text" 
        placeholder="Digite o seu nome..." 
        id="name" 
        {...register("name")} 
        />
        {errors.name && (<small className="text-red-500 italic">{errors.name.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">Sobrenome:</label>
        <input 
        className="h-10 pl-3 rounded-md border border-slate-300"
        type="text" 
        placeholder="Digite o seu sobrenome..." 
        id="name" 
        {...register("lastname")} 
        />
        {errors.lastname && (<small className="text-red-500 italic">{errors.lastname.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">Gênero:</label>
        <select  
        className="h-10 pl-2 rounded-md border border-slate-300"
        id="gender"{...register("gender")}>
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        {errors.gender && (<small className="text-red-500 italic">{errors.gender.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">E-mail:</label>
        <input 
        className="h-10 pl-3 rounded-md border border-slate-300"
        type="email" 
        placeholder="Digite seu e-mail..." 
        id="email" 
        {...register("email")} 
        />
        {errors.email && (<small className="text-red-500 italic">{errors.email.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">Senha:</label>
        <input 
        className="h-10 pl-3 rounded-md border border-slate-300"
        type="password" 
        placeholder="Digite sua senha..." 
        id="password" 
        {...register("password")} 
        />
        {errors.password && (<small className="text-red-500 italic">{errors.password.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="">Confirmar senha:</label>
        <input 
        className="h-10 pl-3 rounded-md border border-slate-300"
        type="password" 
        placeholder="Confirme a sua senha..." 
        id="confirmPassword" 
        {...register("confirmPassword")} 
        />
        {errors.confirmPassword && (<small className="text-red-500 italic">{errors.confirmPassword.message} </small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center gap-1 pl-2">
          <input 
          type="checkbox" 
          placeholder="Confirme a sua senha..." 
          id="agree" 
          {...register("agree")} 
          />
          <label htmlFor="">Concordar com os termos</label>
        </div>
        {errors.agree && (<small className="text-red-500 italic">{errors.agree.message} </small>)}
      </div>
      <button 
      className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all"
      type="submit">Cadastrar</button>
    </form>
  )
}