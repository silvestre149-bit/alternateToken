document.addEventListener("DOMContentLoaded", () => {
    if (typeof OBR === 'undefined') {
        console.error('OBR is not defined');
        return;
    }

    OBR.onReady(() => {
        let currentTokenId = '9e098ab3-f059-4aad-be1c-e903c5877579';  // ID do token com tapa-olho
        let tokenWithPatch = '9e098ab3-f059-4aad-be1c-e903c5877579';  // ID do token com tapa-olho
        let tokenWithoutPatch = 'id-do-token-sem-tapa-olho';  // Substitua pelo ID do token sem tapa-olho

        document.getElementById('toggleTokenButton').addEventListener('click', () => {
            const newTokenId = currentTokenId === tokenWithPatch ? tokenWithoutPatch : tokenWithPatch;
            OBR.assets.updateAsset({
                id: currentTokenId,
                assetId: newTokenId
            });
            currentTokenId = newTokenId;
        });
    });
});
