OBR.onReady(() => {
    let currentTokenId = 'id-do-token-com-tapa-olho';
    let tokenWithPatch = 'id-do-token-com-tapa-olho';
    let tokenWithoutPatch = 'id-do-token-sem-tapa-olho';

    document.getElementById('toggleTokenButton').addEventListener('click', () => {
        const newTokenId = currentTokenId === tokenWithPatch ? tokenWithoutPatch : tokenWithPatch;
        OBR.assets.updateAsset({
            id: currentTokenId,
            assetId: newTokenId
        });
        currentTokenId = newTokenId;
    });
});

