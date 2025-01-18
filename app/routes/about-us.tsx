import NavBar from "~/components/nav-bar";

const AboutUs = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <NavBar />
      <div className="m-5">
        <div className="flex flex-col items-center m-5">
          <h1 className="text-2xl m-1 font-bold">About Us</h1>
          <img src="https://placedog.net/400" />
        </div>
        <div className="desktop:grid grid-cols-3 gap-3 mobile: grid-rows-3 gap-y-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
            massa enim nec dui nunc mattis enim. Praesent tristique magna sit
            amet purus gravida quis blandit turpis. Adipiscing enim eu turpis
            egestas pretium aenean. Fringilla urna porttitor rhoncus dolor
            purus. Vehicula ipsum a arcu cursus vitae congue mauris. Vel turpis
            nunc eget lorem dolor sed viverra ipsum. Donec pretium vulputate
            sapien nec. Quam vulputate dignissim suspendisse in est ante in nibh
            mauris. Congue mauris rhoncus aenean vel elit scelerisque mauris.
            Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
            Felis eget nunc lobortis mattis aliquam faucibus purus. Turpis massa
            sed elementum tempus egestas sed. Arcu dictum varius duis at
            consectetur lorem donec massa sapien. Sed id semper risus in
            hendrerit gravida. Adipiscing commodo elit at imperdiet dui accumsan
            sit amet. Cursus eget nunc scelerisque viverra mauris. Quam viverra
            orci sagittis eu volutpat odio facilisis.
          </p>
          <p>
            Eget nulla facilisi etiam dignissim. Sit amet nulla facilisi morbi
            tempus iaculis urna id volutpat. Scelerisque fermentum dui faucibus
            in ornare quam viverra orci. Condimentum mattis pellentesque id nibh
            tortor id aliquet lectus proin. Gravida rutrum quisque non tellus
            orci ac auctor. Vel pretium lectus quam id leo in vitae turpis. Ut
            faucibus pulvinar elementum integer enim neque volutpat ac.
            Imperdiet dui accumsan sit amet nulla facilisi. Imperdiet nulla
            malesuada pellentesque elit. Commodo elit at imperdiet dui accumsan
            sit. Dolor magna eget est lorem ipsum dolor sit amet. Interdum
            posuere lorem ipsum dolor sit amet consectetur. Sed cras ornare arcu
            dui vivamus arcu felis bibendum ut. Sit amet consectetur adipiscing
            elit. Ipsum dolor sit amet consectetur adipiscing elit. Ut porttitor
            leo a diam sollicitudin.
          </p>
          <p>
            Arcu non sodales neque sodales ut. Amet purus gravida quis blandit
            turpis. Viverra adipiscing at in tellus integer feugiat. Tristique
            et egestas quis ipsum suspendisse ultrices. Tellus cras adipiscing
            enim eu. Auctor urna nunc id cursus metus aliquam eleifend mi. Purus
            ut faucibus pulvinar elementum integer. Sem et tortor consequat id
            porta nibh venenatis cras. Id neque aliquam vestibulum morbi
            blandit. Venenatis cras sed felis eget velit aliquet sagittis. Nec
            ullamcorper sit amet risus nullam. Blandit aliquam etiam erat velit
            scelerisque in dictum non consectetur. Congue eu consequat ac felis
            donec et odio. Nulla facilisi etiam dignissim diam quis enim
            lobortis scelerisque. Imperdiet massa tincidunt nunc pulvinar
            sapien. At tellus at urna condimentum. Sed viverra ipsum nunc
            aliquet bibendum enim facilisis gravida neque. Sapien eget mi proin
            sed libero enim. Arcu non odio euismod lacinia at quis. Suspendisse
            in est ante in nibh mauris cursus. Amet luctus venenatis lectus
            magna fringilla urna porttitor rhoncus dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
