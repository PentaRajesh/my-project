

const Contact = () => {
  return (
    <div className="lg:px-12 px-4">
      <div className="text-headingColor text-center mb-20">
          <p className="text-xl font-semibond mb-5">Get In Touch</p>
          <h2 className="md:text-5xl text-4xl font-bold">Contact me</h2>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="md:w-2/3 mx-auto mb-20">
        <form>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="fName" className="text-base text-headingColor w-full">First name</label>
              <input type="text" id="fName" name="fName" className="block border border-primary rounder-lg py-2 mt-2 w-full"/>
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="lName" className="text-base text-headingColor w-full">Last name</label>
              <input type="text" id="fName" name="lName" className="block border border-primary rounder-lg py-2 mt-2 w-full"/>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="email" className="text-base text-headingColor w-full">Email</label>
              <input type="email" id="email" name="email" className="block border border-primary rounder-lg py-2 mt-2 w-full"/>
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="phone" className="text-base text-headingColor w-full">Phone number</label>
              <input type="text" id="phone" name="phone" className="block border border-primary rounder-lg py-2 mt-2 w-full"/>
            </div>
          </div>
          <div className="w-full mb-8">
            <label htmlFor="options" className="text-base text-headingColor w-full">Choose a topic</label>
            <select name="options" id="options" className="block border border-primary rounder-lg py-2 mt-2 w-full px-2">
              <option value="0">Select One...</option>
              <option value="1">Web Design</option>
              <option value="2">UI/UX Design</option>
              <option value="3">Web Development</option>
              <option value="4">Graphics Design</option>
            </select>
          </div>
          <div className="w-full mb-8">
            <label htmlFor="message" className="text-base text-headingColor w-full">Message</label>
            <textarea name="message" id="" cols="30" rows="5" placeholder="Type Your Meassage" 
            className="block border border-primary rounder-lg py-2 mt-2 w-full px-2"></textarea>
          </div>
          <div>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-base text-headingColor w-full ml-3 items-center">I accept the terms</label>
          </div>
          <div className="w-36 mx-auto mt-8">
            <input type="submit" value="Submit" className="btn-primary bg-primary py-3 px-8
            cursor-pointer w-full"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact