
export function Microphone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="myGradient">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>

      <path fill="url(#myGradient)" fillRule="evenodd" d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0zm1.566-.75H9a.75.75 0 0 1 0 1.5H7.75v1.5H9a.75.75 0 0 1 0 1.5H7.816a4.251 4.251 0 0 0 8.368 0H13.5a.75.75 0 0 1 0-1.5h2.75v-1.5H13.5a.75.75 0 0 1 0-1.5h2.684a4.251 4.251 0 0 0-8.368 0M4 9.25a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25" clipRule="evenodd">
      </path>
    </svg>
  )
}
export default Microphone