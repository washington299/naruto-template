import React from 'react';

import './style.css';

import Ninjutsu from '../../images/ninjutsu.jpg';
import Genjutsu from '../../images/genjutsu.png';
import Taijutsu from '../../images/taijutsu.png';

const Jutsus = () => {
    return(
        <section className="centralize" id="jutsus">
            <div className="container column">
                <div className="naruto_jutsus" id="naruto_jutsus">

                    <div className="area_title">
                        <div className="widget_title" style={{fontSize: 30}}>
                            Types of Jutsus
                        </div>
                    </div>

                    <div className="padding-right padding-left">
                        Jutsu are the mystical arts a ninja will utilise in battle. To use a technique, the ninja will need to use their chakra. To perform a technique, the ninja will bring out and release the two energies of chakra. By forming hand seals, the ninja is able to manifest the desired technique. Because of the extensive number of hand seals and different combinations, there are thousands of potential techniques to be discovered. There are three basic types of techniques: ninjutsu, genjutsu and taijutsu:
                    </div>

                    <div className="jutsu_information padding-left">
                        <div className="jutsu_image">
                            <img src={Ninjutsu} title="ninjutsu"/>
                        </div>
                        <div className="jutsu_description">
                            <div className="jutsu_title">Ninjutsu</div>
                            <div className="jutsu_text padding-right">Ninjutsu is one of the three main jutsu categories. Ninjutsu is the most nebulous of the three, and may most simply be described as anything that is not genjutsu or taijutsu. Most ninjutsu require chakra and hand seals, but this is not always the case since the mere usage of weaponry qualifies as ninjutsu. The huge range of ninjutsu's uses is illustrated by its several sub-classifications: medical ninjutsu, reincarnation ninjutsu, space–time ninjutsu, barrier ninjutsu, sealing jutsu, and cursed seal jutsu. Most ninjutsu use shape transformation, which deals with controlling the form and movement of the ninjutsu, while nature transformation deals with changing the ninjutsu's physical properties. Ninjutsu that use nature transformation tend to follow a naming convention of their nature type followed by a more specific name. With practice and experience, certain ninjutsu can become second nature to a ninja, allowing them to perform it at will.</div>
                        </div>
                    </div>

                    <div className="jutsu_information padding-left">
                        <div className="jutsu_image">
                            <img src={Genjutsu} title="genjutsu"/>
                        </div>
                        <div className="jutsu_description">
                            <div className="jutsu_title">Genjutsu</div>
                            <div className="jutsu_text padding-right">A genjutsu is created when a ninja controls the chakra flow of a target's cerebral nervous system, thereby affecting their five senses; this is frequently used to create false images and/or trick the body into believing its has experienced physical pain. It is further explained in the anime that, because genjutsu affects activity throughout the prosencephalon structure of the brain, humans, dogs and other species of mammal are therefore all affected by genjutsu; however, the kikaichū, like all insects, lack such a structure to their brains, and so do not even notice it: as Shino Aburame put it, insects are ruled almost solely by their senses alone, which makes them immune to genjutsu and gives the Aburame clan an ability to detect it, even when heightened senses become succeptible.</div>
                        </div>
                    </div>

                    <div className="jutsu_information padding-left">
                        <div className="jutsu_image">
                            <img src={Taijutsu} title="taijutsu"/>
                        </div>
                        <div className="jutsu_description">
                            <div className="jutsu_title">Taijutsu</div>
                            <div className="jutsu_text padding-right">Taijutsu is a basic form of techniques and refers to any techniques involving the martial arts or the optimisation of natural human abilities. Taijutsu is executed by directly accessing the user's physical and mental energies, relying on the stamina and strength gained through training. It typically does not require chakra, though chakra may be used to enhance its techniques. Taijutsu generally requires no hand seals to perform, occasionally making use of certain stances or poses, and are far quicker to use than ninjutsu or genjutsu. Taijutsu is simply put: hand-to-hand combat. Example of taijutsu techniques are Dynamic Entry and Leaf Whirlwind. The Hyūga clan's Gentle Fist, however, makes extensive use of chakra and demands great skill in its control. The taijutsu techniques are the right choices for those that want to save their time and chakra, or for those who rely on their physical attributes.</div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </section>
    );
};

export default Jutsus;