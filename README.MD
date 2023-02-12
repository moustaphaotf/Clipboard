# Clipboard

Ce projet est une application C/S qui permet à plusieurs utilisateurs de partager un presse-papier commun stocké sur une machine qu'on appelera serveur.

## Cas d'utilisation

La première étape consitera à installer le logiciel dans l'ordinateur qui servira de serveur. L'ordinateur étant disponible à travers un réseau sans fil sur lequel d'autres appareils ont aussi accès (mobiles, ordinateurs).

Il faudra disposer de l'IP du serveur et ainsi à partir du navigateur de l'appareil se connecter au serveur (en tappant l'IP). On pourrait aussi proposer de scanner un QR qui reflète l'IP (et le port) du serveur (Ce qui facilite grandement l'utilisation). Une fois qu'il accède à l'adresse, cela résultera pour chaque appareil connecté au serveur à l'affichage de l'interface d'accueil de l'application qui va expliquer brièvement son rôle...

Une fois que l'application est décrite, l'utilisateur, pourras accéder aux différentes fonctionnalitées de cette dernière qui se résument comme suit :

### Un presse-papier privé

Ici, l'utilisateur aura la possibilité d'éditer (créer, modifier) du contenu pour (supposément) le partager publiquement avec d'autres personnes (se trouvant sur le réseau). Pour le moment il n'y a pas restriction de droit d'accès (cela veut dire que chaque utilisateur accepté par l'administrateur aura accès au contenu public). Une fois qu'il partage son presse-papier, il pourra accéder à son contenu partagé dans la section décrite à la partie suivante.

Il a aussi la possibilité de supprimer du contenu partagé :
* Ramener en privé ce qui était public
* Supprimer définitivement

### Lister les différents périphériques du réseau

Ici, à traver une interface, l'utilisateur aura une idée sur les différents utilisateurs qui ont partagé du contenu.