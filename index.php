<?php
require "header.php";
?>

<?php
function ForumSection($sectionNameSpaces, $subSectionNumber, $sectionNameDash, $color, $greyFirst, $greyNotLast, $javascriptFunctionName, $description) {
  echo " <!--Broad Topic #1($sectionNameSpaces)-->
  <li class='index'>
    <div class='$subSectionNumber'>
      <img src='images/Chat.png' class='index' alt='Chat'>
      <button class='index Create-Post-Button' type='submit' name='create-post' onclick='$javascriptFunctionName()'>Create Post</button>
      <h4 class='index'>$sectionNameSpaces</h4>
      <p class='index $color $greyFirst $greyNotLast'>$description</p>
    </div>
  </li> 
  <!--Create Post #1($sectionNameSpaces)-->
  <div class='index Create-Post-$sectionNameDash Create-Post'>
    <form method='POST' action='".setComments()."> 
      <input type='hidden' name='uid' value='Anonymous'>
      <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
      <h3 class='$sectionNameDash-Create-Post $sectionNameDash-Post $sectionNameDash-Post-Header'>Create Post</h3>
      <h4 class='$sectionNameDash-Create-Post-Title-Header'>Title</h4>
      <h4 class='$sectionNameDash-Create-Post-Title-Explination'>Be Specific and make sure that your question or topic is userstandable</h4>
      <input type='text' class='index $sectionNameDash-Post $sectionNameDash-Post-Title' name='$sectionNameDash-Post-Title'>
      <h4 class='$sectionNameDash-Create-Post-Message-Header'>Message</h4>
      <h4 class='$sectionNameDash-Create-Post-Message-Explination'>Include all of the information that you want people to comment about</h4>
      <textarea name='$sectionNameDash-Post-Message' class='index $sectionNameDash-Post $sectionNameDash-Post-Message'></textarea>
      <button class='index $sectionNameDash-Post $sectionNameDash-Post-Post' type='submit' name='$sectionNameDash-Post-Submit'>Create Thread</button>
    </form>
  </div>";
}
?>

<main class="index">
  <div class="index">
    <ul class="index">
      <li class="index">
        <div class="first main-topics">
          <div class="SectionHeader1">
            <img src="./images/blank.png" class="indexDropDownArrow indexTheHub1DropDownArrow" onclick="toggleTheHub1DropDownArrow()" alt="Chat">
            <h3 class="index">The Hub</h3>
          </div>
          <div class="firstExcludeHeader">
            <ul class="index">
              <?php
                ForumSection('General Discussion', 'firstfirst', 'General-Discussion', 'grey', 'greyfirst', 'greynotlast', 'toggleNavGeneralDiscussion', 'Description');
                getComments($conn);
                ForumSection('Tech News', 'firstsecond', 'Tech-News', 'white', null, null, 'toggleNavTechNews', 'Description');
                ForumSection('Off Topic', 'firstthird', 'Off-Topic', 'grey', null, 'greynotlast', 'toggleNavOffTopic', 'Description');
                ForumSection('Gmgymnast Official', 'firstfourth', 'Gmgymnast-Official', 'white', null, null, 'toggleNavGmgymnastOfficial', 'Description');
                ForumSection('Forum Information', 'firstfifth', 'Forum-Information', 'grey', null, null, 'toggleNavForumInformation', 'Description');
              ?>  
            </ul> 
          </div>
        </div>
      </li>
      <li class="index">
        <div class="second main-topics">
          <div class="SectionHeader2">
            <img src="./images/blank.png" class="indexDropDownArrow indexTheHub2DropDownArrow" onclick="toggleTheHub2DropDownArrow()" alt="Chat">
            <h3 class="index">Computer Hardware</h3>
          </div>
          <div class="secondExcludeHeader">
            <ul class="index">

              <?php
                ForumSection('Graphics Cards', 'secondfirst', 'Graphics-Cards', 'grey', 'greyfirst', 'greynotlast', 'toggleNavGraphicsCards', 'Description');
                ForumSection('CPUs, Motherboards, and Memory', 'secondsecond', 'Motherboards', 'white', null, null, 'toggleNavMotherboards', 'Description');
                ForumSection('Cases and Power Supplies', 'secondthird', 'Cases-PSU', 'grey', null, 'greynotlast', 'toggleNavCasesPSU', 'Description');
                ForumSection('Liquid Cooling', 'secondfourth', 'Liquid-Cooling', 'white', null, null, 'toggleNavLiquidCooling', 'Description');
                ForumSection('Air Cooling', 'secondfifth', 'Air-Cooling', 'grey', null, 'greynotlast', 'toggleNavAirCooling', 'Description');
                ForumSection('Peripherals', 'secondsixth', 'Peripherals', 'white', null, null, 'toggleNavPeripherals', 'Description');
                ForumSection('Audio', 'secondseventh', 'Audio', 'grey', null, 'greynotlast', 'toggleNavAudio', 'Description');
                ForumSection('Storage Devices', 'secondeighth', 'Storage-Devices', 'white', null, null, 'toggleNavStorageDevices', 'Description');
                ForumSection('Displays', 'secondninth', 'Displays', 'grey', null, 'greynotlast', 'toggleNavDisplays', 'Description');
                ForumSection('Networking', 'secondtenth', 'Networking', 'white', null, null, 'toggleNavNetworking', 'Description');
                ForumSection('Servers and NAS', 'secondeleventh', 'Servers-NAS', 'grey', null, null, 'toggleNavServersNAS', 'Description');
              ?>
            </ul>
          </div>
        </div>
      </li>
      <li class="index">
        <div class="third main-topics">
          <div class="SectionHeader3">
            <img src="./images/blank.png" class="indexDropDownArrow indexTheHub3DropDownArrow" onclick="toggleTheHub3DropDownArrow()" alt="Chat">
            <h3 class="index">Video Games</h3>
          </div>
          <div class="thirdExcludeHeader">
            <ul class="index">
              <?php
                ForumSection('Looking For Teammates', 'thirdfirst', 'Looking-For-Teammates', 'grey', 'greyfirst', 'greynotlast', 'toggleNavLookingForTeammates', 'Description');
                ForumSection('PC Gaming', 'thirdsecond', 'PC-Gaming', 'white', null, null, 'toggleNavPCGaming', 'Description');
                ForumSection('Console Gaming', 'thirdthird', 'Console-Gaming', 'grey', null, 'greynotlast', 'toggleNavConsoleGaming', 'Description');
                ForumSection('Mobile Gaming', 'thirdfourth', 'Mobile-Gaming', 'white', null, null, 'toggleNavMobileGaming', 'Description');
                ForumSection('Esports', 'thirdfifth', 'Esports', 'grey', null, null, 'toggleNavEsports', 'Description');
              ?>
            </ul>
          </div>
        </div>
      </li>
      <li class="index last">
        <div class="fourth main-topics">
          <div class="SectionHeader4">
            <img src="./images/blank.png" class="indexDropDownArrow indexTheHub4DropDownArrow" onclick="toggleTheHub4DropDownArrow()" alt="Chat">
            <h3 class="index">Software</h3>
          </div>
          <div class="fourthExcludeHeader">
            <ul class="index">
              <?php
                ForumSection('Operating Systems', 'fourthfirst', 'Operating-Systems', 'grey', 'greyfirst', 'greynotlast', 'toggleNavOperatingSystems', 'Description');
                ForumSection('Programming', 'fourthsecond', 'Programming', 'white', null, null, 'toggleNavProgramming', 'Description');
                ForumSection('Programs, Websites and Apps', 'fourththird', 'Programs-Websites-Apps', 'grey', null, null, 'toggleNavProgramsWebsitesApps', 'Description');
              ?>
           </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</main>

<?php
require "footer.php";
?>