export default function ({ label, type, name, value, onChange, placeholder, validation = { isValid: true, errorMessage: '' }, id }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} id={id} onChange={onChange} placeholder={placeholder} />
      {!validation.isValid && <p className='errorMsg'>{validation.errorMessage}</p>}
    </>
  )
}
