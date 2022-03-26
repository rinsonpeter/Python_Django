$csvPath = read-host "Please enter the .csv file path"
$csvTerms = Import-CSV -path $csvPath #Eg: C:\Users\Administrator\Desktop\Createterms.csv


#setting variables from csv 
foreach( $Record in $csvTerms){
    $LibraryName=$Record.Library
    $TermPath=$Record.TermPath
    $ColName=$Record.ColName
    $SiteURL=$Record.Url    
    break
}

Write-Host "Connection to the site..." -ForegroundColor Yellow  
$Cred = Get-Credential
Connect-PnPOnline -Url $SiteURL -Credentials $Cred                #Connect-PnpOnline -Url $SiteUrl -Interactive           
Write-Host "Connection successfull..." -ForegroundColor Yellow

$lists = Get-PnPList -Includes Fields -Identity $LibraryName
$ListItems= Get-PnPListItem -List $lists
Write-host -f Green "$($ListItems.Count) list Rows Found!"


#update list item's MMS field 
foreach ($Record in $csvTerms) {
    $UpdateTerm= $Record.Term
    $val=$TermPath+$UpdateTerm
    if($ListItems.Count -gt 0){
        foreach($item in $ListItems){
            if($Record.Name -eq $item["FileLeafRef"]){
                Write-host -f Green "inside "$item["FileLeafRef"]  $Record.Name
                Set-PnPListItem -List $lists -Identity $item -Values @{$ColName = $val}
            }
        }
    }
        
} 


  