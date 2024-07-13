export default function ({ label, type, name, value, onChange, placeholder, validation = { isValid: true, errorMessage: '' }, id, defaultValue = '' }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} id={id} onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} />
      {!validation.isValid && <p className='errorMsg'>{validation.errorMessage}</p>}
    </>
  )
}
